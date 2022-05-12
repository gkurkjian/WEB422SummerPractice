// Version 02 uses an IIFE and a global export (globalThis), see:
// https://developer.mozilla.org/en-US/docs/Glossary/IIFE
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis

// Close a function over our "module"'s code, hiding the internal details.
// Only the charCount() function will be exposed to the global scope.
(function(global) {
  // Everything below is "private", only available in the current function scope

  /**
   * Count the number of non-whitespace characters in a line of text
   * 
   * @param {string} line the line of text to be counted
   * @returns {number} the number of non-whitespace characters in the line 
   */
  const countChars = (line) => line.replace(/\s*/g, '').length;

  /**
   * Convert an Array of lines (strings) to an Array of statistic Objects
   * with both the line itself and a character count.
   * 
   * @param {Array<string>} lines the lines of text to be processed 
   * @returns {Array<Object>} the statistics for each line of text 
   */
  const getStatsForLines = (lines) =>
    lines.map((line) =>
      ({
        count: countChars(line),
        line
      })
    );


  /**
   * Gets the total number of words for all line statistics in the Array.
   * 
   * @param {Array<Object>} stats the Array of line statistics Objects to be counted 
   * @returns {number} the total of all words across all lines of text 
   */
  const getTotalCountForLines = (stats) =>
    stats.reduce((total, curr) => total + curr.count, 0);


  /**
   * Get character counts for each line, and the total for the whole string of text.
   * 
   * @param {string} text a piece of text to analyze
   * @returns {Object} 
   */
  function charCount(text) {
    // Split the text string on newline characters (Windows or Unix both supported)
    text = text.split(/\r?\n/);
    // Convert the lines of text into an Array of statistics, with 
    const stats = getStatsForLines(text);

    return {
      lines: stats,
      total: getTotalCountForLines(stats),
    };
  }

  // Export the charCount function on the global, so it is accessible outside
  global.charCount = charCount;

}(globalThis));

// Here we can call charCount() since it is exposed on the global, but not countChars().
