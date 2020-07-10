# -*- coding: utf-8 -*-
"""
Created on Mon Jun 15 18:01:04 2020

@author: castromi
"""

from bs4 import BeautifulSoup as bs
import requests
from requests.packages.urllib3.exceptions import InsecureRequestWarning

requests.packages.urllib3.disable_warnings(InsecureRequestWarning)


def main():
    link = open('NuclearLaunchDetected2.html', encoding="utf-8")
    soup=bs(link, "html.parser")
    filetype='.mp3'
    
    for audio in soup.find_all('a'):
        audio_link = audio.get('href')
        
        if filetype in audio_link:
            with open(audio.text + filetype, 'wb') as file:
                response = requests.get(audio_link) 
                file.write(response.content)
    pass
    



main()