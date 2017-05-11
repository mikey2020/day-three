class StringSplosion{
	constructor(word){
		this.word = word;
		this.letters = this.word.split('');
		console.log(this.letters);
	}

	manipulate(){
		let stop = 0;
		let start = 0;
	    this.sploded = [];
		while(stop <= this.letters.length){
			let val = this.letters.slice(start,stop);
			console.log(val);
			this.sploded.push(val);
			console.log(this.sploded);
			stop++;
		}
		//this.sploded.split(',');
		let sploded = this.sploded.toString();
		sploded = sploded.replace(/,/g,'');
		
		return sploded;
	}

}

module.exports = StringSplosion;

