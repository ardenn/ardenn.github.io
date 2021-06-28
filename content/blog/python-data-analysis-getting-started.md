---
title: "Python Data Analysis - Getting Started"
date: 2018-05-09T13:23:08+03:00
draft: false
categories:
    - Programming
tags:
    - Python
    - Data
    - Ubuntu
    - Machine Learning
    - Jupyter
---

_This article was originally posted on [Medium](https://medium.com/@mc_alila/python-data-analysis-getting-started-a2514facfdfe)_

It has been just over a week since Ubuntu [18.04 LTS](https://www.omgubuntu.co.uk/2018/04/ubuntu-18-04-download-release-features) was released, and if you are like me, you’ll always prefer to do a clean install rather than an upgrade. I use Ubuntu on my primary development machine, so clean installs generally mean setting up a new development environment. I initially struggled with setting up my Data Analysis environment on my old system, and thought of documenting the procedure this time round, at least for my sake. I hope this helps out someone like me, when getting started.

## **Prerequisites**

I use Python for my data analysis needs, which usually comes bundled in to Ubuntu releases. This article assumes you have Python3, and the package manager pip installed.

If you don’t have pip installed, as in my case, use the command sudo apt install python3-pip to get it from the Ubuntu repositories. I try to always use Python3, preferably the version that gets shipped with the OS, and in this case that would be Python 3.6.5.

If you wish to check your version of Python3, you can use the command python3 --version on your terminal. An alternative to using regular python is to use the [Anaconda](https://www.anaconda.com/what-is-anaconda/) distribution, which is commonly used for data science, and comes with most of the required libraries pre-installed. That, is however outside the scope of this article.

Here is a quick roundup of the basic libraries we’ll need to get set up:

**[Virtualenv](https://virtualenv.pypa.io/en/stable)**

This is a tool to create isolated Python environments. I use virtual environments for all my python projects, to basically keep dependencies and versions consistent, and independent on a per-project basis. If you need to install it, use the command sudo pip3 install virtualenv. With virtualenv installed, we can then proceed to create a project directory, and a virtual environment.

    $ mkdir data_science && cd data_science
    $ virtualenv .env -p python3
    $ source .env/bin/activate

## Computation libraries

**Jupyter notebook and/or Jupyter Lab**

Jupyter notebook is an application that allows you to write python code in an interactive environment. Jupyter lab is the next-generation user interface for jupyter’s computing environment. i.e a ‘revamped jupyter notebook’. In my case, I will install both of them, in the virtual environment we just activated above.

    $ pip install notebook
    $ pip install jupyterlab

**Numpy**

Numpy is a library for scientific computing in python, famously known for its powerful N-dimensional array object, which is used extensively in data analysis. To install numpy we will install the entire SciPy stack, which is aptly described as [a Python-based ecosystem of open-source software for mathematics, science, and engineering.](https://www.scipy.org/index.html) The SciPy stack includes among other packages:

1. Numpy — provides an N-dimension array.

1. Matplotlib — a plotting library, used to produce a wide array of 2D plots, and has a similar interface to MATLAB.

1. pandas — a library that provides high performance, flexible data structures , and data analysis tools for python.

1. scipy — provides several modules that enable a variety of mathematical operations such as optimization, linear algebra, integration, interpolation, and special functions.

1. Ipython — a powerful and interactive shell that allows interactivity, visualisations and use of GUI toolkits. It provides the kernel that forms the basis for jupyter.

1. [SymPy ](http://www.sympy.org/en/index.html)— a Python library for symbolic mathematics. It allows users to write algebraic expressions as mathematical objects, which gives the advantage of exact representation, as opposed to approximations. Sympy also keeps the code comprehensible to the human eye.

1. Nose — a unit testing framework for python. It provides project-level functions to simplify testing for projects. Nose developers recommend using [nose2](https://github.com/nose-devs/nose2), a successor to nose, based on python’s inbuilt [unittest2](https://pypi.org/project/unittest2/) module.

    $ pip install numpy scipy matplotlib ipython jupyter pandas sympy nose

## Visualisation Libraries

Visualization is a necessity for data processing. It gives life and meaning to all the complex operations that go in to data wrangling and transformation. Its the language that people understand. Python has a variety of tools that can achieve this goal.

**Seaborn**

Seaborn is quite popular for making aesthetically and statistically pleasing graphs and charts. It is relatively easier to use than matplolib (which is largely the underlying component behind seaborn). Seaborn also provides great graphic details that allow for pattern identification, and trend analysis among other benefits. To install seaborn:

    $ pip install seaborn

**Plotly**

Plotly, aptly named after its online platform [plot.ly](https://plot.ly) is another great tool for visualization in python. It allows one to create interactive, publication-quality graphs online. A major difference between plotly and seaborn, or matplotlib is the ability to make interactive and responsive plots, making it suitable for web publishing. To use plotly offline, we will need to install an additional library, **cufflinks**, which binds the flexibility of plotly to pandas dataframes.

    $ pip install plotly
    $ pip install cufflinks

## Clean Up and Start Up

Having set up the basic requirements for the development environment, I’ll go ahead and start jupyter lab, spin up a new notebook, and see how/ if everything works.

    $ jupyter lab

Now we can build the future, one dataset at a time!

Thank you.
