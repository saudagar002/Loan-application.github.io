
//Below code is Convert number into words


// this function is called in (onchange event) in html code when the amount changes
function num_to_words() {  
    var num = document.getElementById('amount').value; //e.g 123456789
    var num_array = Array.from(String(num)); //converted 123456789 to array ['1','2','3','4','5','6','7','8','9']

    var final_array = [];
    var pair_array = [];
    var i, j;
    var len = num_array.length; //calculated length of the number
    var in_words = '';

    var first19 = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];

    var tens = ['', '', 'Twenty', 'Thirty', 'Fourty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];



    switch (len) {
        //case 9 is for number with 9 digits
        case 9:
            pair = 5;
            //converted this array ['1','2','3','4','5','6','7','8','9'] into 5 pairs ['12','34','56','7','89'] like ['Crore','Lakh','Thousand','Hundred','Ten']

            pair_array[0] = num_array[0] + num_array[1];
            pair_array[1] = num_array[2] + num_array[3];
            pair_array[2] = num_array[4] + num_array[5];
            pair_array[3] = num_array[6];
            pair_array[4] = num_array[7] + num_array[8];

            num_words(); //called function to convert words and store it into array final_array[];


            //below conditions are to bypassing zeros or '' empty arrays from final_array[] and store array values in var in_words; as string.
            if (final_array[0] != '') {
                in_words += ' ' + final_array[0] + ' ' + 'Crore';
            }
            if (final_array[1] != '') {
                in_words += ' ' + final_array[1] + ' ' + 'Lakh';
            }
            if (final_array[2] != '') {
                in_words += ' ' + final_array[2] + ' ' + 'Thousand';
            }
            if (final_array[3] != '') {
                in_words += ' ' + final_array[3] + ' ' + 'Hundred';
            }
            if (final_array[4] != '') {
                in_words += ' ' + final_array[4] + ' ';
            }

            break;

        //case 8 is for number with 8 digits
        case 8:
            pair = 5; //['Crore','Lakh','Thousand','Hundred','Ten']
            pair_array[0] = num_array[0];
            pair_array[1] = num_array[1] + num_array[2];
            pair_array[2] = num_array[3] + num_array[4];
            pair_array[3] = num_array[5];
            pair_array[4] = num_array[6] + num_array[7];

            num_words();

            if (final_array[0] != '') {
                in_words += ' ' + final_array[0] + ' ' + 'Crore';
            }
            if (final_array[1] != '') {
                in_words += ' ' + final_array[1] + ' ' + 'Lakh';
            }
            if (final_array[2] != '') {
                in_words += ' ' + final_array[2] + ' ' + 'Thousand';
            }
            if (final_array[3] != '') {
                in_words += ' ' + final_array[3] + ' ' + 'Hundred';
            }
            if (final_array[4] != '') {
                in_words += ' ' + final_array[4] + ' ';
            }

            break;

        //case 7 is for number with 7 digits
        case 7:
            pair = 4; //[Lakh','Thousand','Hundred','Ten']
            pair_array[0] = num_array[0] + num_array[1];
            pair_array[1] = num_array[2] + num_array[3];
            pair_array[2] = num_array[4];
            pair_array[3] = num_array[5] + num_array[6];

            num_words();

            if (final_array[0] != '') {
                in_words += ' ' + final_array[0] + ' ' + 'Lakh';
            }
            if (final_array[1] != '') {
                in_words += ' ' + final_array[1] + ' ' + 'Thousand';
            }
            if (final_array[2] != '') {
                in_words += ' ' + final_array[2] + ' ' + 'Hundred';
            }
            if (final_array[3] != '') {
                in_words += ' ' + final_array[3] + ' ';
            }

            break;

        //case 6 is for number with 6 digits
        case 6:
            pair = 4; //[Lakh','Thousand','Hundred','Ten']
            pair_array[0] = num_array[0];
            pair_array[1] = num_array[1] + num_array[2];
            pair_array[2] = num_array[3];
            pair_array[3] = num_array[4] + num_array[5];

            num_words();

            if (final_array[0] != '') {
                in_words += ' ' + final_array[0] + ' ' + 'Lakh';
            }
            if (final_array[1] != '') {
                in_words += ' ' + final_array[1] + ' ' + 'Thousand';
            }
            if (final_array[2] != '') {
                in_words += ' ' + final_array[2] + ' ' + 'Hundred';
            }
            if (final_array[3] != '') {
                in_words += ' ' + final_array[3] + ' ';
            }

            break;

        //case 5 is for number with 5 digits
        case 5:
            pair = 3; //[Thousand','Hundred','Ten']
            pair_array[0] = num_array[0] + num_array[1];
            pair_array[1] = num_array[2];
            pair_array[2] = num_array[3] + num_array[4];

            num_words();

            if (final_array[0] != '') {
                in_words += ' ' + final_array[0] + ' ' + 'Thousand';
            }
            if (final_array[1] != '') {
                in_words += ' ' + final_array[1] + ' ' + 'Hundred';
            }
            if (final_array[2] != '') {
                in_words += ' ' + final_array[2] + ' ';
            }

            break;

        //case 4 is for number with 4 digits
        case 4:
            pair = 3; //[Thousand','Hundred','Ten']
            pair_array[0] = num_array[0];
            pair_array[1] = num_array[1];
            pair_array[2] = num_array[2] + num_array[3];

            num_words();

            if (final_array[0] != '') {
                in_words += ' ' + final_array[0] + ' ' + 'Thousand';
            }
            if (final_array[1] != '') {
                in_words += ' ' + final_array[1] + ' ' + 'Hundred';
            }
            if (final_array[2] != '') {
                in_words += ' ' + final_array[2] + ' ';
            }

            break;

        //case 3 is for number with 3 digits
        case 3:
            pair = 2; //[Hundred','Ten']
            pair_array[0] = num_array[0];
            pair_array[1] = num_array[1] + num_array[2];

            num_words();

            if (final_array[0] != '') {
                in_words += ' ' + final_array[0] + ' ' + 'Hundred';
            }
            if (final_array[1] != '') {
                in_words += ' ' + final_array[1] + ' ';
            }

            break;

        //case 2 is for number with 2 digits
        case 2:
            pair = 1; //['Ten']
            pair_array[0] = num_array[0] + num_array[1];

            num_words();

            if (final_array[0] != '') {
                in_words += ' ' + final_array[0] + ' ';
            }

            break;

        //case 1 is for number with 1 digits
        case 1:
            pair = 1; //['Ten']
            pair_array[0] = num_array[0];

            num_words();

            if (final_array[0] != '') {
                in_words += ' ' + final_array[0] + ' ';
            }

            break;

    }

    function num_words() {
        i = 0
        while (i < pair) {
            // created new array of array like this        
            // [[12],[34],[56],[7],[89]]
            final_array[i] = Array.from(Array(pair_array[i]));

            if (parseInt(final_array[i]) == 0) {
                final_array[i] = '';
            }

            // if the array element is 1 to 19, then assigned value from predefined array first19[];
            if (final_array[i] <= 19 && final_array[i] > 0) {
                final_array[i] = first19[parseInt(final_array[i])];
            }

            // if the array element is greater than 19, then split into two strings like [34] to[3,4]
            if (final_array[i] > 19) {
                final_array[i] = Array.from(String(final_array[i]));

                j = 0
                while (j < 2) {
                    // asssigned value to non zero element from predefined tens[] array
                    if (final_array[i][j] != 0) {
                        final_array[i][j] = tens[final_array[i][j]];
                    }

                    // if the value of array element is 0 then, converted it into blank space
                    if (final_array[i][j] == 0) {
                        final_array[i][j] = '';
                    }

                    if (final_array[i][j + 1] == 0) {
                        final_array[i][j + 1] = '';
                    }

                    // asiigned value to non zero element from predefined first19[] array
                    if (final_array[i][j + 1] != 0) {
                        final_array[i][j + 1] = first19[final_array[i][j + 1]];
                    }

                    j += 2;
                }
                j = 0;

                // again joined that splitted array in one array element after converting in to words
                final_array[i] = final_array[i][j] + " " + final_array[i][j + 1];
            }
            i++;
        }

        // final_array[] has been created by converting digits into words like this ['Twelve','Thirty Four','Fifty Six','Seven','Eighty Nine']
    }
    document.getElementById('num-words').innerHTML = "(Rs.-"+" "+in_words+" "+"Only)";


    console.log(num);
    console.log(num_array);
    console.log(pair_array);
    console.log(final_array);
    console.log(in_words);
}




