(function ( $ ) {

    // Example usage: jQuery(".selector").spanLetters(); 
  
    $.fn.spanLetters = function() {

        // Loop through each element on which this function has been called
        this.each( function() {   
          
            // Make an array with each letter of the string as a value
            var words = $(this).text().split("");

            // Loop through the letters and wrap each one in a span
            for (i = 0; i in words; i++) {
              words[i] = '<span class="sl' + (i + 1) + ' span-letter">' + words[i] + '</span>'
            };

            // Join our array of span-wrapped letters back into a string
            var text = words.join('');

            // Replace the original string with the new string
            $(this).html(text);

        })

    }

}( jQuery ));
