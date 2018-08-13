#!/usr/bin/python3
# -*- coding: UTF-8 -*-
"""
生成js list  用于 应用
"""
#Time2018/8/11下午3:46

import os
import json
import shutil
def GetFileList(dir, fileList = []):
    newDir = dir
    if os.path.isfile(dir):
        fileList.append(dir.decode('utf-8'))
    elif os.path.isdir(dir):
        for s in os.listdir(dir):
            newDir=os.path.join(dir,s)
            GetFileList(newDir, fileList)
    return fileList

def getExcludeByFileType(type,file):
    allList = GetFileList(file,[])
    resList = []
    for fil in allList:
        fpath,fname = os.path.split(fil)
        ftype = fname.split(".").pop()
        if type == ftype:
            resList.append(fil)
    return resList

def buildJSJSON():
    jsonFIle = "resource/JS.json"
    allJSFile = "debug/"
    filee = os.path.realpath(__file__)
    projectToolPath, projectToolName = os.path.split(filee)

    print("build js json begin")
    allJSFIleList = getExcludeByFileType("js", projectToolPath + "/" + allJSFile)
    res = {}
    res["initial"] = []
    res["game"] = []

    with open(jsonFIle, 'r') as f:
        res["initial"] = json.load(f)["initial"]


    if len(allJSFIleList) > 0:

        for fil in allJSFIleList:
            fil = fil.replace(projectToolPath, "")
            res["game"].append(fil)
    # libjsonFIle = "resource/LibJS.json"
    # allLibJS = {}
    # with open(libjsonFIle, 'r') as f:
    #     allLibJS =  json.load(f)
    # for fi in allLibJS["lib"]:
    #     res["initial"].append(fi)
    resStr =  json.dumps(res).replace("{","{\n").replace("}","}\n").replace("[","[\n").replace("]","]\n").replace(",",",\n")

    with open(jsonFIle, 'w') as f:
        f.write(resStr)
        #json.dump(res, f)

def delDebugJS():
    print("delete js")
    filee = os.path.realpath(__file__)
    projectToolPath, projectToolName = os.path.split(filee)
    pa = projectToolPath + "/" + "debug"
    allFi = GetFileList(projectToolPath + "/" + "debug",[])
    for f in allFi:
        os.remove(f)
    files = os.listdir(pa)  # 获取路径下的子文件(夹)列表
    for file in files:
        newDir = os.path.join(pa, file)
        if os.path.isdir(newDir):  # 如果是文件夹
            if not os.listdir(newDir):  # 如果子文件为空
                os.rmdir(newDir)  # 删除这个空文件夹


def runApp():
    runShell = "npm start"
    os.system(runShell)

def buildTS():
    runShell = "tsc"
    os.system(runShell)
if __name__ == '__main__':
    delDebugJS()
    buildTS()
    buildJSJSON()
    runApp()


