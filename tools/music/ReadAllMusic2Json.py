# -*- coding: utf-8 -*-
# @Time    : 2018/8/16 下午12:06

import json
import os

def GetFileList(dir, fileList):
    newDir = dir
    if os.path.isfile(dir):
        fileList.append(dir)
    elif os.path.isdir(dir):
        for s in os.listdir(dir):
            newDir=os.path.join(dir,s)
            GetFileList(newDir, fileList)
    return fileList

def createJsonFile():
    filee = os.path.realpath(__file__)
    projectToolPath, projectToolName = os.path.split(filee)
    pa = projectToolPath.replace("tools/music","")


    if not os.path.exists(pa):
        '''创建路径'''
        mkdir(pa + "/resource/music.json")
    res = []
    allMusciFile = GetFileList(pa+"/resource/music",[])
    for i in allMusciFile:
        item = {}
        fPath, fName = os.path.split(i)
        item[fName.split(".")[0]] = i.replace(pa,"")

        res.append(item)
    with open(pa + "/resource/music.json", 'w') as f:
        json.dump(res,f)


def mkdir(path):
    path = path.strip()
    path = path.rstrip("\\")
    isExists = os.path.exists(path)
    if not isExists:
        os.makedirs(path)
        return True
    else:
        return False


if __name__ == '__main__':
    print("run")
    createJsonFile()
    print("success")