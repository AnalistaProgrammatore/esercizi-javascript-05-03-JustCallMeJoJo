let votesAlumn = {
    votes: [],
    add(vote) {
        this.votes.push(vote)
    },
    average () {
        return this.votes.reduce((acc, corr) => acc + corr)/this.votes.length
    }
}
votesAlumn.add(6);
votesAlumn.add(8);
votesAlumn.add(7);
votesAlumn.add(9);
console.log (votesAlumn.votes);
console.log (votesAlumn.average());
