# Step by step guide to install pyenv on WSL

1. `python3 -m pip install pyenv`
2. Add pyenv initializer to `.zshrc` file or whatever config file

    ```sh
    # add also pyenv to path
    echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.zshrc
    echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.zshrc
    # add pyenv inistializer
    echo -e '\nif command -v pyenv 1>/dev/null 2>&1; then
    eval "$(pyenv init -)"
    fi' >> ~/.zshrc
    # reload a shell
    exec $SHELL
    ```

3. `pyenv install 3.8.3` - or any other python version

    If Installing python version was not successeful due to this error:

    ```accesslog
    user:path ➜ pyenv install 3.8.3
    Downloading Python-3.8.3.tar.xz...
    -> https://www.python.org/ftp/python/3.8.3/Python-3.8.3.tar.xz
    Installing Python-3.8.3...

    BUILD FAILED (Ubuntu 18.04 using python-build 1.2.18-19-gcf81e5a0)

    Inspect or clean up the working tree at /tmp/python-build.20200522214748.9532
    Results logged to /tmp/python-build.20200522214748.9532.log

    Last 10 log lines:
    File "/tmp/python-build.20200522214748.9532/Python-3.8.3/Lib/runpy.py", line 144, in _get_module_details
        return _get_module_details(pkg_main_name, error)
    File "/tmp/python-build.20200522214748.9532/Python-3.8.3/Lib/runpy.py", line 111, in _get_module_details
        __import__(pkg_name)
    File "<frozen zipimport>", line 241, in load_module
    File "<frozen zipimport>", line 709, in _get_module_code
    File "<frozen zipimport>", line 570, in _get_data
    zipimport.ZipImportError: can't decompress data; zlib not available
    Makefile:1186: recipe for target 'install' failed
    make: *** [install] Error 1
    ```

    Install missing library `sudo apt install zlib1g-dev`

4. Add try to install python version again - `pyenv install 3.8.3` - or any other python version
5. `pyenv (global | local) 3.8.3` - choose to set 3.8.3 as a global python or specific to a project. If local version of python is installed it will create a file `.python-version` with python version
6. Install poetry

   1. `python3 -m pip install --user poetry` or via curl

   ```sh
   # bash
   curl -sSL https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py | python
   # powershell
   (Invoke-WebRequest -Uri https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py -UseBasicParsing).Content | python
   ```
