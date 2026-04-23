🌍 One portfolio, three deployments – this week’s DevOps deep dive
This week I didn’t just write code. I built environments, broke things, fixed them, and deployed the same portfolio three different ways. Here’s the breakdown:
🧪 Part 1 – Vagrant: Linux lab without fear
Used: Vagrant + VirtualBox to run Ubuntu, CentOS & RedHat
Why Vagrant matters:
Spin up multiple Linux distros on your laptop in minutes.
Learn the differences: apt vs yum/dnf, systemd vs init, file structures.
Safe sandbox – you can vagrant destroy and start fresh.
You cannot master Linux without breaking it. Vagrant lets you break safely.
📁 Part 2 – GitHub Pages: First public deploy
Built: Portfolio (HTML/CSS/JS) → pushed to GitHub → enabled GitHub Pages
Why GitHub + Pages matter:
Version control is non‑negotiable in any serious project.
GitHub Pages gives you instant, free, HTTPS‑protected hosting.
It forces you to understand the git push → live cycle.
🔗 Live:
https://lnkd.in/dqzAazBB
☁️ Part 3 – AWS EC2 + Nginx: Real cloud deployment
Today’s project:
Launched an Ubuntu EC2 instance (IAM‑secured)
Installed Nginx web server
Cloned the same portfolio from GitHub
Copied files to /var/www/html/ and restarted Nginx
Why AWS + Nginx:
EC2 is the industry standard for cloud VMs – security groups, SSH keys, Elastic IPs.
Nginx is lightweight, fast, and powers a huge % of the web.
You learn real sysadmin: cp -r, permissions, systemctl restart nginx.
🔗 Live on AWS:
http://18.234.49.139/
🔁 The full pipeline (no automation – yet)
Vagrant (learn Linux) → Build portfolio → GitHub (version control) → GitHub Pages (static hosting) → AWS EC2 + Nginx (cloud prod)
💡 Why this matters for junior engineers
Tools are just tools – the workflow is what counts.
Vagrant teaches local infrastructure as code
GitHub teaches collaboration + traceability
AWS teaches cloud operations
Nginx teaches web serving basics
Each one builds a layer of real, employable skill.
✅ What I accomplished this week (3 projects, 3 environments)

ToolPurposeOutcomeVagrantMulti‑distro Linux labUbuntu, CentOS, RedHat on one laptopGitHub PagesFree static hostingPortfolio live in 2 minutesAWS EC2 + NginxCloud deploymentPortfolio live on public IP
🚀 Next challenge:
Automate the EC2 deployment with a CI/CD pipeline (GitHub Actions → SCP → Nginx reload).
Watch this space.
👨‍💻 If you’re learning DevOps – start with Vagrant. Then break things on AWS. Then automate.
🔁 Repost if you believe in learning by doing.
💬 What’s the first Linux distro you ever installed?
#DevOps #Linux #Vagrant #AWS #EC2 #Nginx #GitHubPages #PortfolioProject #CloudComputing #90DaysOfDevOps
