export default defineEventHandler(async (event) => {

  // path GET. POST
  const path = event.path;
  console.log('path', path);

  if (event.method === 'GET') {
    console.log('GET')
  } else if (event.method === 'POST') {
    console.log('POST');

    const body = await readBody(event);
    console.log(body)
  }

  // queryString GET
  const { name } = getQuery(event);
  console.log('name', name);

  const [res1, res2] = await Promise.all([
    $fetch('http://localhost:8080/members/1'),
    $fetch('http://localhost:8080/members/2'),
  ]);

  const resp = {
    res1,
    res2,
  }

  return {
    code: 200,
    msg: 'success',
    body: resp,
  }
})
