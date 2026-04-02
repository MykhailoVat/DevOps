const fat_html = (data) => {
    return`
            <html>
            <body>
            <h1>Tasks</h1>
            <table border="1">
            <tr><th>ID</th><th>Title</th><th>Status</th></tr>
            ${data.map(t => `
            <tr>
            <td>${t.id}</td>
            <td>${t.title}</td>
            <td>${t.status}</td>
            <td>${new Date(t.created_at).toLocaleString("uk-UA")}</td>
            </tr>`).join('')}
            </table>
            </body>
            </html>
            `;
}

export default fat_html;