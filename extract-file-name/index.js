class FileNameExtractor {
  static extractFileName(dirtyFileName) {
    // Splitting the array to make things easier
    const array = dirtyFileName.split(".");
    // Gotta deal with _ here
    let fileName = array[0].split("_");
    // And finally returning the final array
    return fileName.length > 2
      ? (fileName[1] + "_" + fileName[2]).concat(".", array[1])
      : (fileName = fileName[1].concat(".", array[1]));
  }
}
