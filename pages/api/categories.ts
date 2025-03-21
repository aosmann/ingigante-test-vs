import nc from "next-connect";

const handler = nc();

handler.get(async (req, res) => {
  const categories = [
    "Houses",
    "Townhomes",
    "Multi-family",
    "Condos/Co-ops",
    "Lots/Lands",
    "Apartments",
    "Manufactured",
  ];
  res.send(categories);
});

export default handler;
