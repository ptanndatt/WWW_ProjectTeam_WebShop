@echo off
title WebShop Auto Build and Deploy

echo ================================
echo   BUILD + DEPLOY WEB SHOP
echo ================================
echo.

cd /d D:\DocumentHK2\WWW\WebShop

echo [1/5] Dang build project...
call "C:\Program Files\JetBrains\IntelliJ IDEA Community Edition 2025.2.6.1\plugins\maven\lib\maven3\bin\mvn.cmd" clean package -f pom.xml
if errorlevel 1 (
    echo.
    echo Build loi. Kiem tra lai code.
    pause
    exit /b 1
)

echo.
echo [2/5] Dang stop Tomcat...
cd /d D:\DocumentHK2\WWW\Onthigk\PhamTanDat_21022271\apache-tomcat-11.0.18\bin
call shutdown.bat >nul 2>nul

echo.
echo [3/5] Dang xoa ban cu...
del /f /q D:\DocumentHK2\WWW\Onthigk\PhamTanDat_21022271\apache-tomcat-11.0.18\webapps\WebShop.war 2>nul
rmdir /s /q D:\DocumentHK2\WWW\Onthigk\PhamTanDat_21022271\apache-tomcat-11.0.18\webapps\WebShop 2>nul

echo.
echo [4/5] Dang copy file WAR moi...
copy /Y D:\DocumentHK2\WWW\WebShop\target\WebShop.war D:\DocumentHK2\WWW\Onthigk\PhamTanDat_21022271\apache-tomcat-11.0.18\webapps\
if errorlevel 1 (
    echo.
    echo Copy file WAR loi.
    pause
    exit /b 1
)

echo.
echo [5/5] Dang start Tomcat...
cd /d D:\DocumentHK2\WWW\Onthigk\PhamTanDat_21022271\apache-tomcat-11.0.18\bin
set JAVA_HOME=D:\DocumentHK2\WWW\Onthigk\PhamTanDat_21022271\jdk-21.0.10+7
set JRE_HOME=D:\DocumentHK2\WWW\Onthigk\PhamTanDat_21022271\jdk-21.0.10+7
set PATH=%JAVA_HOME%\bin;%PATH%
call startup.bat

echo.
echo ================================
echo   XONG ROI
echo   Mo: http://localhost:8080/WebShop/home
echo ================================
echo.
pause