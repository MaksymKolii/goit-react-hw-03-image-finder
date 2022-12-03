export const imagesMapper = array => {
  return array.map(
    ({
      id,
      webformatURL: smallImg,
      largeImageURL: bigImg,
      // totalHits: totalPages,
    }) => ({
      id,
      smallImg,
      bigImg,
      // totalPages,
    })
  );
};
