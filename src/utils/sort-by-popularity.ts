// sort the by popularity
export default function sortByPopularity(data: any) {
  return data.sort((a: any, b: any) => {
    return b.popularity - a.popularity;
  });
}

