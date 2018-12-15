# Adobe XD Serializer



## Credit

This project was originally started as a fork of [xd-json-wrapper](https://github.com/svschannak/xd-json-wrapper). However, the goals of this project and particular use cases were unique enough that it no longer seemed a long lived fork was not an appropriate mechanism. The goal of `adobexd-serializer` is to provide a modular means of serialization for adobexd trees while `xd-json-wrapper` currently only supports json serialization of singular nodes. Additionally `adobexd-serializer` intends to provide a streaming approach, built as a tree-shakeable, typescript library. 

Given though that the core originally started from the work of `xd-json-wrapper` we intend for certain objects to be interoperable, specifically the node types. 


# MIT License

Copyright (c) 2018 Jonathan Fontanez

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.