class StringSplosion{
	constructor(word){
		this.word = word;
		this.letters = this.word.split('');
		console.log(this.letters);
	}

	manipulate(){
		let stop = 0;
		let start = 0;
	    let splodedList = [];
		while(stop <= this.letters.length){
			let val = this.letters.slice(start,stop);
			console.log(val);
			splodedList.push(val);
			console.log(splodedList);
			stop++;
		}
		let splodedWord = splodedList.toString();
		splodedWord = splodedWord.replace(/,/g,'');
		
		return splodedWord;
	}

}

module.exports = StringSplosion;

