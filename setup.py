# -*- coding: utf-8 -*-
from setuptools import setup, find_packages

with open('requirements.txt') as f:
	install_requires = f.read().strip().split('\n')

# get version from __version__ variable in dgsolops/__init__.py
from dgsolops import __version__ as version

setup(
	name='dgsolops',
	version=version,
	description='Custom Operation and Customization for DGSOL ',
	author='DGSOL INFOTECH PVT. LTD.',
	author_email='jayesh@dgsol-in.com',
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
