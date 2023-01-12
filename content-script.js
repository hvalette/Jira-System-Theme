const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const isJiraDark =
  document.documentElement.getAttribute('data-theme') === 'dark';

if (isDark && !isJiraDark) {
  fetch(
    `${location.origin}/rest/api/3/mypreferences?key=jira.user.theme.preference`,
    {
      body: '{"value":"dark"}',
      method: 'PUT',
    }
  ).then(() => location.reload());
} else if (!isDark && isJiraDark) {
  fetch(
    `${location.origin}/rest/api/3/mypreferences?key=jira.user.theme.preference`,
    {
      body: '{"value":"light"}',
      method: 'PUT',
    }
  ).then(() => location.reload());
}

window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', ({ matches }) => {
    if (matches && !isJiraDark) {
      fetch(
        `${location.origin}/rest/api/3/mypreferences?key=jira.user.theme.preference`,
        {
          body: '{"value":"dark"}',
          method: 'PUT',
        }
      ).then(() => location.reload());
    } else {
      if (isJiraDark) {
        fetch(
          `${location.origin}/rest/api/3/mypreferences?key=jira.user.theme.preference`,
          {
            body: '{"value":"light"}',
            method: 'PUT',
          }
        ).then(() => location.reload());
      }
    }
  });
