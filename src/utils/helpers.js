import { getSrc } from "gatsby-plugin-image";

export default {
  getImageMap: (images, regex, hasMultipleImages = false, limit = 3) => {
    //console.debug(images);
    return images.reduce((map, image) => {
      const slug = image.node.relativePath.match(regex)[0];
      //const img = getSrc(image.node);
      const img = image.node;
      //console.debug(img);
      if (hasMultipleImages) {
        if (map.hasOwnProperty(slug)) {
          if (map[slug].length <= limit) map[slug].push(img);
        } else {
          const arr = [];
          arr.push(img);
          map[slug] = arr;
        }
      } else {
        map[slug] = img;
      }
      return map;
    }, {});
  },
};
