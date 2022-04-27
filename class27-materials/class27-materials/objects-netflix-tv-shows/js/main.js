//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class MakeNetflixTVShow {
    constructor(title, seasons, castNum, rating){
        this.title = title;
        this.seasons = seasons;
        this.castNum = castNum;
        this.rating = rating;
    }
    play(){
        console.log('Now playing..')
    }
    recap(){
        console.log("Here's a quick recap")
    }
    startOver(){
        console.log('Starting from season 1, episode 1')
    }
}
