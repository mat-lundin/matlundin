# My First Experience Rebasing a Branch

Anyone who has used code repositories extensively is likely familiar with rebasing. Rebasing is essentially the act of reconciling changes that have occurred in the main branch since the branch you are working on was created from main. This is a common practice in professional coding environments where multiple branches are being worked on by multiple developers and merging into main at different times. While I am still waiting to get my foot in the door as a software developer/engineer, I recently ran into a (perhaps unique) case with a personal coding project that I work on with close friends. 

Here is that story and what I learned from the experience.

## How did it start?

The need for a rebase was due to what I understand to be an uncommon mistake, one that even I knew better than to make. It also involved the ```Merge and Squash``` feature in Github. Let's go through the process that I took before I comment more on what I should have done instead.

1. I wanted to develop a new feature of our personal Discord bot repository. I created a new branch, which automatically branches off of the main branch. I'll refer to this as newBranch1 from here on out.
2. I worked on developing the new feature over the course of a couple of weeks. When the new feature was done and tested, I confirmed manually by looking at github and confirming there had been no new activity on the repository since I pulled from main.
3. I created my pull request, which was reviewed by other contributors to the repo, and my code was successfully merged. However, where a new developer working on a simple project may just use the ```Merge``` option to pulling code into the main branch, my friends are professional developers and chose to enable ```Merge and Squash``` as the only option for approved pull requests. I'll get to the difference a little later in this post.
4. After playing around a bit with the new feature in production, I noticed an extremely small "bug" that I should clean up. No problem right?
5. To fix this bug I simply went onto my local version of newBranch1, which I had just merged into main. No changes had been made to main since my own code was merged from this exact copy of newBranch1, so I figured I was fine. I made the changes and submitted a second pull request for newBranch1.
6. After submitting the new pull request for newBranch1, I received a comment that the branch would need to be rebased. Admittedly, I panicked for a bit, not knowing what a rebase was but knowing that it had to do with correcting the repository, which is often an intimidating task.

## Rebase attempt

My friend was nice enough to do a screenshare with me and talk me through the rebase process and clarify why it was necessary in this case. 

## Lessons learned

What squashing is
What to always do