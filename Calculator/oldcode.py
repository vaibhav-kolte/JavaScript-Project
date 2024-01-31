import requests
import os

def download_file_from_github(owner, repo, file_path, access_token, save_path):
    #url = f"https://raw.githubusercontent.com/{owner}/{repo}/main/{file_path}"
    url = f"https://raw.githubusercontent.com/{owner}/{repo}/main/{file_path}"
    headers = {
        "Authorization": f"token {access_token}",
        "Accept": "application/vnd.github.v3.raw"
    }

    response = requests.get(url, headers=headers)
    print(f"response {response.content}")

    if response.status_code == 200:
        with open(os.path.join(save_path, os.path.basename(file_path)), "wb") as f:
            f.write(response.content)
        print("File downloaded successfully.")
    else:
        print(f"Failed to download file: {response.text}")

# Replace these values with your GitHub repository details#owner = "madhuri.anagal@bruviti.com"
owner = "vaibhav0910 "
#repo = "geappliances/connected.automated-integration-regression-engine"
#https://github.com/vaibhav0910/FileDownloadTesting/blob/main/demo.txt
repo = "FileDownloadTesting"
#file_path = "releases/download/v0.3.15.113/WiFiBLECombo_v0.3.15.113_413ded2.zip"
file_path = "demo.txt"
#access_token = "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"
access_token = "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"

# Replace 'save_path' # with the directory where you want to save the downloaded filesave_path = "newfolder"

# Create directory if it doesn't existos.makedirs(save_path, exist_ok=True)

download_file_from_github(owner, repo, file_path, access_token, save_path)