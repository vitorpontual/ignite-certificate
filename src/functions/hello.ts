export const handle = async (event) => {
  return {
    statusCode: 201,
    body: JSON.stringify({
      message: "Hello World Ignite"
    }),
    headers: {
      "Content-type": "application/json"
    }
  }
}