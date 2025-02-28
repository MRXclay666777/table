fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(data => {
    const wrapper = document.querySelector(".wrapper");

    // Создаём таблицу один раз
    const table = document.createElement("table");
    table.className = "table";

    // Добавляем заголовки
    table.innerHTML = `
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody></tbody>
    `;

    const tbody = table.querySelector("tbody");

    // Добавляем строки с данными
    data.forEach(item => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${item.id}</td>
        <td>${item.title}</td>
        <td>${item.completed ? "✅" : "❌"}</td>
      `;
      tbody.appendChild(tr);
    });

    // Добавляем таблицу в wrapper
    wrapper.appendChild(table);
  });




