const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const BLOG_DIR = path.join(__dirname, 'blog');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API list posts
app.get('/api/posts', (req, res) => {
  fs.readdir(BLOG_DIR, (err, files) => {
    if (err) return res.status(500).json({ error: 'Unable to list posts' });
    res.json(files.filter(f => f.endsWith('.md')));
  });
});

// API create post
app.post('/api/posts', (req, res) => {
  const { slug, title, content } = req.body;
  if (!slug || !title || !content) {
    return res.status(400).json({ error: 'Missing fields' });
  }
  const fileContent = `---\nslug: ${slug}\ntitle: ${title}\n---\n\n${content}\n`;
  fs.writeFile(path.join(BLOG_DIR, `${slug}.md`), fileContent, err => {
    if (err) return res.status(500).json({ error: 'Could not write file' });
    res.json({ message: 'Post created' });
  });
});

// API delete post
app.delete('/api/posts/:slug', (req, res) => {
  const filePath = path.join(BLOG_DIR, `${req.params.slug}.md`);
  fs.unlink(filePath, err => {
    if (err) return res.status(500).json({ error: 'Could not delete post' });
    res.json({ message: 'Post deleted' });
  });
});

// serve static build if available
if (fs.existsSync(path.join(__dirname, 'build'))) {
  app.use(express.static('build'));
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
