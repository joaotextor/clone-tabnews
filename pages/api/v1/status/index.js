export default function status(request, response) {
  response.status(200).json({
    status: "Olá mundo cruel!",
  });
}
