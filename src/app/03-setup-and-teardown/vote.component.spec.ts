import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let voteComponent: VoteComponent;


  beforeEach(() => {
    voteComponent = new VoteComponent();
    //set up
  })

  afterEach(() => {
    //tear down
    voteComponent = null;

  })
  it('should increment total votes when upvoted', () => {
    let totalvotes = voteComponent.totalVotes;
    voteComponent.upVote();
    expect(voteComponent.totalVotes).toBe(totalvotes + 1);

  });

  it('should decrement total votes when downvoted', () => {
    let totalvotes = voteComponent.totalVotes;
    voteComponent.downVote();
    expect(voteComponent.totalVotes).toBe(totalvotes - 1);

  });
});