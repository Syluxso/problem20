function isPalindrome (str) {
    // We take the string offered and do the following
    // - Change everything to lower case and remove white space
    // - Remove non alpha
    // - Remove special char '_'
    const newStr = str.toLowerCase().replace(/\W/g, '').replaceAll('_', '');

    // We create an empty array
    const revArray = [];

    // We get the string leng and lower it by one so we can loop it.
    const length = str.length - 1;

    // We loop it back wards so that it is reversed.
    for(let i = length; i >= 0; i--) {
        revArray.push(str[i]);
    }

    // Take the array and...
    // - Join it ack into a string.
    // - Change everything to lower case and remove white space
    // - Remove non alpha
    // - Remove special char '_'
    const comp = revArray.join('').toLowerCase().replace(/\W/g, '').replaceAll('_', '');
    if(newStr === comp) {
        return true;
    } else {
        return false;
    }
}

