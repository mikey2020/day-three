module.exports = {

	reverseString: (word) =>{

		if(word === ''){
			return null;
		}
		
		let reversedWord = "";
		
		for(let counter = (word.length -1); counter >= 0 ; counter--){
		  
		   reversedWord += word[counter];
		}
		if(reversedWord === word){
		    return true;
		}
		
		return reversedWord;  
		
	}
}