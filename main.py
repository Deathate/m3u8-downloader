from multiprocessing import Process, Semaphore, freeze_support
import subprocess
import os
from pathlib import Path

# pyinstaller --onefile --add-data "N_m3u8DL-CLI_v3.0.2_with_ffmpeg_and_SimpleG/*;N_m3u8DL-CLI_v3.0.2_with_ffmpeg_and_SimpleG"  main.py
# https: // stackoverflow.com/questions/41870727/pyinstaller-adding-data-files


def getList():
    Path(targetpath).mkdir(exist_ok=True)
    with open(urlfile, encoding="utf-8") as f:
        data = [l.strip() for l in f]
    className = [data[i] for i in range(0, len(data), 2)]
    url = [data[i] for i in range(1, len(data), 2)]
    objs = list(zip(url, className))

    # trim exist file
    for d in [entry for entry in os.listdir(targetpath) if os.path.isfile(os.path.join(targetpath, entry))]:
        d = d[:-4]
        if d in className:
            className.remove(d)
    print(className)
    cs = []
    for obj in objs:
        if obj[1] in className:
            workDir = targetpath
            saveName = obj[1]
            Url = obj[0]
            exePath = Path(
                Path(__file__).parent, r"N_m3u8DL-CLI_v3.0.2_with_ffmpeg_and_SimpleG\N_m3u8DL-CLI_v3.0.2.exe")
            command = f"{exePath} {Url} --workDir {workDir} --saveName \"{saveName}\""
            cs.append(command)
    return cs


def getRemain(className):
    for d in [entry for entry in os.listdir(targetpath)
              if os.path.isfile(os.path.join(targetpath, entry))]:
        d = d[:-4]
        if d in className:
            className.remove(d)
    print(className)


def f(command, sema):
    subprocess.Popen(command).wait()
    sema.release()


if __name__ == '__main__':
    freeze_support()

    urlfile = input("url file:").replace("\"", "")
    targetpath = input("file to save:").replace("\"", "")

    sema = Semaphore(4)
    all_processes = []
    dwList = getList()
    if len(dwList) == 0:
        print("Done")
        input()
    for command in dwList:
        sema.acquire()
        p = Process(target=f, args=(command, sema))
        all_processes.append(p)
        p.start()
    for p in all_processes:
        p.join()
