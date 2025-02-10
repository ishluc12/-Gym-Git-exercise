# -Gym-Git-exercise
1.What is the command to view the history of commits for the repository?
=> git log

2.Explain what is the meaning of a branch in Git?
=> It is a new or separate version of the main repository.

3.Is Git the same as GitHub, and if yes or no? Defend your answer
=> They are not the same, because Git is a control system while Github is a web based hosting service for Git repositories.
or Git is used to track changes to files and allow user to revert to previous veresion,collaborate with others on projects and manage different branches of development
while GitHub it provide platform where you can store  your Git repositories online,making them accessible to others and facilitating collaboration.

4.What is the command for creating a new branch
=>git branch name_of_the_branch

5.What is the command for move to a different branch
=>git checkout name_of_the_branch

6.What is the purpose of committing changes
=>it is used track changes and history
=>provide a clear and organized workflow

7.How do you set the default user name for every repository on your computer 
=>git config --global user.name "name"
=>gti config --global user.email "email"

8.What is the command to view staged changes
=>git diff --staged

9.How do to unstage changes using Git
=>git reset HEAD filename
unstage all changes
=>git restore --staged . / git restore --staged filename

10.Suppose you deleted a file accidentally how do you restore it to its prev version
=>git checkout -- filename

11.How do you ignore file using Git.
=>touch .gitignore
=> git rm --cached filename
=>git rm --cached directory

12.What is the command to skip staging changes and committing them directly
=>git commit -am "commiting message"

13. What is the purpose of rebase
=>git rebase is used to let you rewrite the command history of your branch.
=>git rebase helps eliminate messy merge commits and creates a linear timeline of changes.
=>With the rebase command, you can take all the changes that were committed on one branch and replay them on a different branch.

14.Explain issues, actions, wiki on GitHub

issue: Track bugs, enhancements, tasks, and other project items
action: Automate your software development workflows
wiki: Documentation hub for your project
















