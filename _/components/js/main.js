// function randowmLetters (limit) {
// 	 var id = "";
// 	 var consonants = "BCDFGHJKLMNPQRSTVWXYZ";
// 	 var vowels = "AEIOU";
// 	 for( var i=0; i < limit; i++ ){
// 	 	if(Math.random() > .5){
// 		 	id += consonants.charAt(Math.floor(Math.random() * consonants.length));
// 		}else{
// 			id += vowels.charAt(Math.floor(Math.random() * vowels.length));
// 		}
// 	 }
// 	 return id;
// }
function getRandowmWord (argument) {
	// body...
}
function jumbleLetters (word) {
	var result = "";
	var letter, index;
	word = word.toUpperCase().split("");
	while(word.length){
		index = (Math.floor(Math.random() * word.length));
		result += word[index];
		word.indexOf(index);
		if (index > -1) {
		    word.splice(index, 1);
		}
	};
	return result;
}
function getPossibleWords (argument) {
	// body...
	//word > 2 length
	//return []
}
function sortWords (arr) {
	// from short to long
}
function renderHiddenWords (argument) {
	// body...
}
function unhideWords (argument) {
	// body...
}
