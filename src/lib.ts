export const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

export const whatsappUrl = (message: string) =>
  `https://wa.me/916353237802?text=${encodeURIComponent(message)}`;
