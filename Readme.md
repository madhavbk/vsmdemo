# README

#Demo 19-Jan-2024

## Setting up a GitHub Repository

1. **Create a new repository:**
    - Go to [GitHub](https://github.com) and log in.
    - Click on the `+` icon in the top right corner and select `New repository`.
    - Enter a repository name and description.
    - Choose to make the repository public or private.
    - Click `Create repository`.

2. **Clone the repository:**
    - Copy the repository URL.
    - Open a terminal and run:
      ```sh
      git clone https://github.com/your-username/your-repository.git
      ```
    - Navigate into the repository directory:
      ```sh
      cd your-repository
      ```

## Configuring SSH Keys

1. **Generate a new SSH key:**
    - Open a terminal and run:
      ```sh
      ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
      ```
    - Follow the prompts to save the key (default location is recommended).

2. **Add the SSH key to the ssh-agent:**
    - Start the ssh-agent in the background:
      ```sh
      eval "$(ssh-agent -s)"
      ```
    - Add your SSH key to the ssh-agent:
      ```sh
      ssh-add ~/.ssh/id_rsa
      ```

3. **Add the SSH key to your GitHub account:**
    - Copy the SSH key to your clipboard:
      ```sh
      cat ~/.ssh/id_rsa.pub
      ```
    - Go to GitHub and navigate to `Settings` > `SSH and GPG keys`.
    - Click `New SSH key`, provide a title, and paste your key.
    - Click `Add SSH key`.

## Configuring GitHub in Jenkins

1. **Install GitHub plugin:**
    - Go to `Manage Jenkins` > `Manage Plugins`.
    - In the `Available` tab, search for `GitHub` and install the `GitHub Plugin`.

2. **Configure GitHub credentials:**
    - Go to `Manage Jenkins` > `Manage Credentials`.
    - Add a new credential with your GitHub username and personal access token.

3. **Create a new Jenkins job:**
    - Go to `New Item`, enter a name, and select `Freestyle project`.
    - Under `Source Code Management`, select `Git`.
    - Enter your repository URL and select the credentials you added earlier.

4. **Build triggers:**
    - Under `Build Triggers`, check `GitHub hook trigger for GITScm polling`.

5. **Save and build:**
    - Save the job configuration.
    - Click `Build Now` to test the setup.
