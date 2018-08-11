# -*- coding: utf-8 -*-
# @Time    : 2018/8/11 下午3:46

"""  生成js list  用于 应用  """

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

    print "build js json begin"
    allJSFIleList = getExcludeByFileType("js", projectToolPath + "/" + allJSFile)
    res = {}
    res["initial"] = []
    res["game"] = []
    if len(allJSFIleList) > 0:
        print ""
        for fil in allJSFIleList:
            fil = fil.replace(projectToolPath, "")
            res["game"].append(fil)

    with open(jsonFIle, 'w') as f:
        json.dump(res, f)
def runApp():
    runShell = "npm start"
    os.system(runShell)

if __name__ == '__main__':
    buildJSJSON()
    runApp()


