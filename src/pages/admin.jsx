import React, { useState } from 'react';

export default function Admin() {
  const [slug, setSlug] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = new URLSearchParams({ slug, title, content }).toString();
    const res = await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    });
    const data = await res.json();
    setMsg(data.message || data.error);
  };

  return (
    <div>
      <h1>Administração de Posts</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Slug: </label>
          <input value={slug} onChange={(e) => setSlug(e.target.value)} />
        </div>
        <div>
          <label>Título: </label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Conteúdo:</label>
          <br />
          <textarea rows={10} cols={60} value={content} onChange={(e) => setContent(e.target.value)} />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {msg && <p>{msg}</p>}
    </div>
  );
}
