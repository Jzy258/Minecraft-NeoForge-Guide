# 快速上手

从现在开始，我们将学习如何安装 NeoForge 的工作区，并且运行和测试你的第一个简单的模组。

## 什么是 NeoForge

Minecraft 的模组都需要通过模组加载器 (Mod Loader) 加载才能正常使用。目前 Minecraft 社区主流的模组加载器包括 Forge、Fabric、NeoForge、Quilt 等。

## 准备工作

你需要熟悉 Java 编程语言，尤其是面向对象、多态、泛型、函数式编程部分的内容。本文档并不包含 Java 教程。

请安装 Java 21 (JDK) 和 64 位的 JVM。NeoForge 推荐和支持 [Microsoft 构建的 OpenJDK](https://learn.microsoft.com/en-us/java/openjdk/download#openjdk-21)，但其他版本的 JDK 同样有效。

::: warning 警告
确保使用的是 **64 位**的 JVM，可以在控制台中执行 `java -version` 查看 JVM 版本。使用 32 位的 JVM 可能导致一系列问题。
:::

你需要熟悉一个 IDE（集成开发环境）的使用。NeoForge 官方支持 [IntelliJ IDEA](https://www.jetbrains.com/idea/) 和 [Eclipse](https://www.eclipse.org/downloads/)，它们都有对 Gradle 的支持。尽管如此，任何 IDE 都可以使用（包括 Netbeans、Visual Studio Code、Vim、Emacs 等）。

熟悉 Git 和 Github 的使用。这在技术上不是必需的，但是这会使你的开发过程更加方便。

## 工作区的安装

打开 Mod Developer Kit (MDK)（ModDevGradle 或 NeoGradle）的 Github 仓库，点击esa

Open the Mod Developer Kit (MDK) (either ModDevGradle or NeoGradle) GitHub repository, click "Use this template" and clone the newly-created repository to your local machine.
If you do not want to use GitHub, or if you want to get the template for an older commit, you can also download the ZIP of the repository (under Code -> Download ZIP) and extract it.
Open your IDE and import the Gradle project. Eclipse and IntelliJ IDEA will do this automatically for you. If you have an IDE that does not do this, you can also do it via the gradlew terminal command.
When doing this for the first time, Gradle will download all dependencies of NeoForge, including Minecraft itself, and decompile them. This can take a fair amount of time (up to an hour, depending on your hardware and network strength).
Whenever you make a change to the Gradle files, the Gradle changes will need to be reloaded, either through the "Reload Gradle" button in your IDE, or again through the gradlew terminal command.
Customizing Your Mod Information
Many of the basic properties of your mod can be changed in the gradle.properties file. This includes basic things like the mod name or the mod version. For more information, see the comments in the gradle.properties file, or see the documentation of the gradle.properties file.

If you want to modify the build process beyond that, you can edit the build.gradle file. NeoGradle, the Gradle plugin for NeoForge, provides several configuration options, a few of which are explained by comments in the build.gradle files. For full documentation, see the NeoGradle documentation.

caution
Only edit the build.gradle and settings.gradle files if you know what you are doing. All basic properties can be set via gradle.properties.

Building and Testing Your Mod
To build your mod, run gradlew build. This will output a file in build/libs with the name archivesBaseName-version.jar. archivesBaseName and version are properties set by the build.gradle and default to the mod_id and mod_version values in the gradle.properties file, respectively; this can be changed in the build.gradle if desired. The resulting JAR file can then be placed in the mods folder of a NeoForge-enabled Minecraft setup, or uploaded to a mod distribution platform.

To run your mod in a test environment, you can either use the generated run configurations or use the associated tasks (e.g. gradlew runClient). This will launch Minecraft from the corresponding runs directory (e.g. runs/client or runs/server), along with any source sets specified. The default MDK includes the main source set, so any code written in src/main/java will be applied.

Server Testing
If you are running a dedicated server, whether through the run configuration or gradlew runServer, the server will shut down immediately. You will need to accept the Minecraft EULA by editing the eula.txt file in the run directory.

Once accepted, the server will load and become available under localhost (or 127.0.0.1 by default). However, you will still not able to join, because the server will be put into online mode by default, which requires authentication (that the Dev player does not have). To fix this, stop your server again and set the online-mode property in the server.properties file to false. Now, start your server, and you should be able to connect.

tip
You should always test your mod in a dedicated server environment. This includes client-only mods, as these should not do anything when loaded on the server.