import {SimDir} from "./types";

const tab = "&#9;";

let info: SimDir = {
    "Education": {
        "Secondary School Examination": {
            name: "Secondary School Examination",
            logo: "./assets/rajhans.svg",
            contents:
`
# Secondary School Examination @ Central Board of Secondary Examination (CBSE)

## Details
Year: 2017
School: Rajhans Vidyalaya, Mumbai, India

# Result
Cumulative Grade Point Average (CGPA): 10.0 / 10.0

# Subjects Taken
<table>
<tr>
    <th>Code</th>
    <th>Name</th>
    <th>Grade</th>
    <th>Grade Point</th>
</tr>
<tr>
    <td>101</td>
    <td>English Communication</td>
    <td>A1</td>
    <td>10</td>
</tr>
<tr>
    <td>002</td>
    <td>Hindi Course A</td>
    <td>A1</td>
    <td>10</td>
</tr>
<tr>
    <td>041</td>
    <td>Mathematics</td>
    <td>A1</td>
    <td>10</td>
</tr>
<tr>
    <td>086</td>
    <td>Science</td>
    <td>A1</td>
    <td>10</td>
</tr>
<tr>
    <td>087</td>
    <td>Social Science</td>
    <td>A1</td>
    <td>10</td>
</tr>
</table>
`
        },
        "Higher Secondary Certificate": {
            name: "Higher Secondary Certificate",
            logo: "",
            contents:
`
# Higher Secondary Certificate @ Maharashtra State Board of Secondary and Higher Secondary Education (MSBSHSE)

## Details
Year: 2019
School: PACE Junior Science College, Andheri, Mumbai, India

# Result
Percentage: 83.08 %
Grade: First Class With Distinction

# Subjects Taken
<table>
<tr>
    <th>Code</th>
    <th>Name</th>
    <th>Marks</th>
    <th>Total Marks</th>
</tr>
<tr>
    <td>01</td>
    <td>English</td>
    <td>84</td>
    <td>100</td>
</tr>
<tr>
    <td>46</td>
    <td>Mathematics and Statistics</td>
    <td>77</td>
    <td>100</td>
</tr>
<tr>
    <td>54</td>
    <td>Physics</td>
    <td>76</td>
    <td>100</td>
</tr>
<tr>
    <td>55</td>
    <td>Chemistry</td>
    <td>61</td>
    <td>100</td>
</tr>
<tr>
    <td>A1</td>
    <td>Electrical Maintenance</td>
    <td>192</td>
    <td>200</td>
</tr>
<tr>
    <td>31</td>
    <td>Environmental Education</td>
    <td>50</td>
    <td>50</td>
</tr>
</table>
`
        },
        "B. Tech.": {
            name: "B. Tech.",
            logo: "./assets/nits.svg",
            contents:
`
# Bachelor of Technology (4 years) @ National Institute of Technology, Silchar, Assam, India

## Duration
December, 2020 - May, 2024

## Result
Cumualative Grade Point Average (CGPA) : 9.20 / 10.0

## Subjects Taken

### 1st Semester
<table>
<tr>
    <th>Name</th>
    <th>Code</th>
    <th>GPA</th>
    <th>Credits</th>
</tr>
<tr>
    <td>Chemistry</td>
    <td>CH 101</td>
    <td>10</td>
    <td>4</td>
</tr>
<tr>
    <td>Mathematics</td>
    <td>MA 101</td>
    <td>9</td>
    <td>4</td>
</tr>
<tr>
    <td>Introduction to Programming</td>
    <td>CS 101</td>
    <td>10</td>
    <td>4</td>
</tr>
<tr>
    <td>Basic Electronics</td>
    <td>EC 101</td>
    <td>10</td>
    <td>4</td>
</tr>
<tr>
    <td>Environmental Science and Engineering</td>
    <td>CE 102</td>
    <td>9</td>
    <td>3</td>
</tr>
<tr>
    <td>Chemistry Laboratory</td>
    <td>CH 111</td>
    <td>10</td>
    <td>2</td>
</tr>
<tr>
    <td>Programming Laboratory</td>
    <td>CS 111</td>
    <td>10</td>
    <td>2</td>
</tr>
<tr>
    <td>Basic Electronics Laboratory</td>
    <td>EC 111</td>
    <td>10</td>
    <td>2</td>
</tr>
<tr>
    <td>Workshop Practice</td>
    <td>ME 111</td>
    <td>8</td>
    <td>2</td>
</tr>
</table>

Semester Grade Point Average (SGPA): 9.59 / 10.0
Semester Credits: 27

### 2nd Semester
<table>
<tr>
    <th>Name</th>
    <th>Code</th>
    <th>GPA</th>
    <th>Credits</th>
</tr>
<tr>
    <td>Physics</td>
    <td>PH 101</td>
    <td>10</td>
    <td>4</td>
</tr>
<tr>
    <td>Mathematics II</td>
    <td>MA 102</td>
    <td>9</td>
    <td>4</td>
</tr>
<tr>
    <td>Engineering Mechanics</td>
    <td>ME 101</td>
    <td>10</td>
    <td>4</td>
</tr>
<tr>
    <td>Basic Electrical Engineering</td>
    <td>EE 101</td>
    <td>10</td>
    <td>4</td>
</tr>
<tr>
    <td>Communicative English</td>
    <td>HS 101</td>
    <td>9</td>
    <td>3</td>
</tr>
<tr>
    <td>Engineering Graphics & Design</td>
    <td>CE 101</td>
    <td>8</td>
    <td>3</td>
</tr>
<tr>
    <td>Physics Laborator</td>
    <td>PH 111</td>
    <td>10</td>
    <td>2</td>
</tr>
<tr>
    <td>Basic Electrical Engineering Laboratory</td>
    <td>EE 111</td>
    <td>10</td>
    <td>2</td>
</tr>
<tr>
    <td>Language Laboratory</td>
    <td>HS 111</td>
    <td>8</td>
    <td>2</td>
</tr>
</table>

Semester Grade Point Average (SGPA): 9.39 / 10.0
Semester Credits: 28

### 3rd Semester
<table>
<tr>
    <th>Name</th>
    <th>Code</th>
    <th>GPA</th>
    <th>Credits</th>
</tr>
<tr>
    <td>Data Structure</td>
    <td>CS 201</td>
    <td>9</td>
    <td>4</td>
</tr>
<tr>
    <td>Mathematics III</td>
    <td>MA 201</td>
    <td>9</td>
    <td>4</td>
</tr>
<tr>
    <td>Discrete Structures</td>
    <td>CS 202</td>
    <td>9</td>
    <td>4</td>
</tr>
<tr>
    <td>Circuits and Switching</td>
    <td>EC 221</td>
    <td>9</td>
    <td>4</td>
</tr>
<tr>
    <td>Microprocessor and Microcontrollers</td>
    <td>EC 223</td>
    <td>9</td>
    <td>4</td>
</tr>
<tr>
    <td>Data Structure Laboratory</td>
    <td>CS 211</td>
    <td>10</td>
    <td>2</td>
</tr>
<tr>
    <td>Mircroprocessor and Microcontroller Laboratory</td>
    <td>EE 224</td>
    <td>10</td>
    <td>2</td>
</tr>
<tr>
    <td>Circuits and Switching Laboratory</td>
    <td>EC 222</td>
    <td>9</td>
    <td>2</td>
</tr>
</table>

Semester Grade Point Average (SGPA): 9.15 / 10.0
Semester Credits: 26

### 4th Semester
<table>
<tr>
    <th>Name</th>
    <th>Code</th>
    <th>GPA</th>
    <th>Credits</th>
</tr>
<tr>
    <td>Theory of Computation</td>
    <td>CS 204</td>
    <td>8</td>
    <td>4</td>
</tr>
<tr>
    <td>Computer Architecture and Organization</td>
    <td>CS 205</td>
    <td>7</td>
    <td>4</td>
</tr>
<tr>
    <td>Algorithms</td>
    <td>CS 206</td>
    <td>8</td>
    <td>4</td>
</tr>
<tr>
    <td>Signals and Data Communication</td>
    <td>CS 207</td>
    <td>9</td>
    <td>4</td>
</tr>
<tr>
    <td>Mathematics IV</td>
    <td>MA 221</td>
    <td>7</td>
    <td>4</td>
</tr>
<tr>
    <td>Object Oriented Programming Laboratory</td>
    <td>CS 208</td>
    <td>10</td>
    <td>3</td>
</tr>
<tr>
    <td>Algorithms Laboratory</td>
    <td>CS 209</td>
    <td>10</td>
    <td>2</td>
</tr>
<tr>
    <td>Signals And Data Communication Laboratory</td>
    <td>CS 210</td>
    <td>9</td>
    <td>2</td>
</tr>
<tr>
    <td>Applied Probability Laboratory</td>
    <td>CS 211</td>
    <td>10</td>
    <td>2</td>
</tr>
</table>

Semester Grade Point Average (SGPA): 8.28 / 10.0
Semester Credits: 29

### 5th Semester
<table>
<tr>
    <th>Name</th>
    <th>Code</th>
    <th>GPA</th>
    <th>Credits</th>
</tr>
<tr>
    <td>Computer Network</td>
    <td>CS 301</td>
    <td>7</td>
    <td>4</td>
</tr>
<tr>
    <td>Database Management Systems</td>
    <td>CS 302</td>
    <td>9</td>
    <td>4</td>
</tr>
<tr>
    <td>Operating Systems</td>
    <td>CS 303</td>
    <td>9</td>
    <td>4</td>
</tr>
<tr>
    <td>Software Engineering</td>
    <td>CS 304</td>
    <td>8</td>
    <td>4</td>
</tr>
<tr>
    <td>Graph Theory</td>
    <td>CS 305</td>
    <td>10</td>
    <td>4</td>
</tr>
<tr>
    <td>Computer Network Laboratory</td>
    <td>CS 311</td>
    <td>10</td>
    <td>2</td>
</tr>
<tr>
    <td>Database Management Systems Laboratory</td>
    <td>CS 312</td>
    <td>10</td>
    <td>2</td>
</tr>
<tr>
    <td>Operating Systems Laboratory</td>
    <td>CS 313</td>
    <td>10</td>
    <td>2</td>
</tr>
<tr>
    <td>Software Engineering Laboratory</td>
    <td>CS 314</td>
    <td>10</td>
    <td>2</td>
</tr>
</table>

Semester Grade Point Average (SGPA): 9.00 / 10.0
Semester Credits: 28

### 6th Semester
<table>
<tr>
    <th>Name</th>
    <th>Code</th>
    <th>GPA</th>
    <th>Credits</th>
</tr>
<tr>
    <td>Principles of Programming Languages</td>
    <td>CS 306</td>
    <td>9</td>
    <td>4</td>
</tr>
<tr>
    <td>Compiler Design</td>
    <td>CS 307</td>
    <td>10</td>
    <td>4</td>
</tr>
<tr>
    <td>Graphics and Multimedia</td>
    <td>CS 308</td>
    <td>10</td>
    <td>4</td>
</tr>
<tr>
    <td>Natural Language Processing</td>
    <td>CS 332</td>
    <td>9</td>
    <td>4</td>
</tr>
<tr>
    <td>Simulation and Modeling</td>
    <td>CS 381</td>
    <td>9</td>
    <td>3</td>
</tr>
<tr>
    <td>Object Oriented Design Laboratory</td>
    <td>CS 315</td>
    <td>9</td>
    <td>2</td>
</tr>
<tr>
    <td>Compiler Design Laboratory</td>
    <td>CS 316</td>
    <td>10</td>
    <td>2</td>
</tr>
<tr>
    <td>Graphics and Multimedia Laboratory</td>
    <td>CS 317</td>
    <td>10</td>
    <td>2</td>
</tr>
<tr>
    <td>Natural Language Processing Laboratory</td>
    <td>CS 322</td>
    <td>10</td>
    <td>2</td>
</tr>
</table>

Semester Grade Point Average (SGPA): 9.52 / 10.0
Semester Credits: 28

### 7th Semester
<table>
<tr>
    <th>Name</th>
    <th>Code</th>
    <th>GPA</th>
    <th>Credits</th>
</tr>
<tr>
    <td>Artificial Intelligence</td>
    <td>CS 401</td>
    <td>9</td>
    <td>4</td>
</tr>
<tr>
    <td>Machine Learning</td>
    <td>CS 431</td>
    <td>10</td>
    <td>3</td>
</tr>
<tr>
    <td>Web Technology</td>
    <td>CS 481</td>
    <td>10</td>
    <td>3</td>
</tr>
<tr>
    <td>Business Management</td>
    <td>MS 401</td>
    <td>9</td>
    <td>3</td>
</tr>
<tr>
    <td>Project I</td>
    <td>CS 498</td>
    <td>8</td>
    <td>4</td>
</tr>
<tr>
    <td>Industry Experience</td>
    <td>CS 497</td>
    <td>9</td>
    <td>2</td>
</tr>
</table>

Semester Grade Point Average (SGPA): 9.11 / 10.0
Semester Credits: 19

### 8th Semester
<table>
<tr>
    <th>Name</th>
    <th>Code</th>
    <th>GPA</th>
    <th>Credits</th>
</tr>
<tr>
    <td>Manegerial Economics</td>
    <td>HS 401</td>
    <td>9</td>
    <td>3</td>
</tr>
<tr>
    <td>Information Theory and Coding</td>
    <td>CS 444</td>
    <td>10</td>
    <td>4</td>
</tr>
<tr>
    <td>Machine Translation</td>
    <td>CS 485</td>
    <td>10</td>
    <td>3</td>
</tr>
<tr>
    <td>Project II</td>
    <td>MS 499</td>
    <td>10</td>
    <td>6</td>
</tr>
</table>

Semester Grade Point Average (SGPA): 9.81 / 10.0
Semester Credits: 16
`
        }
    },
    "Career": {
        "Oracle": {
            "ASE": {
                name: "ASE",
                logo: "./assets/oracle.svg",
                contents:
`
# Associate Software Engineer @ Oracle India

## Duration
July 16, 2024 - Present
`
            },
            "Project Intern": {
                name: "Project Intern",
                logo: "./assets/oracle.svg",
                contents:
`
# Project Intern @ Oracle India

## Duration
March 17, 2023 - July 11, 2023.

## Technologies Involved
wxWidgets, C++17, SQLite3, CMake, MSBuild, BitBucket, Git.

## Work

1) Worked on the product NetSuite TimeClock.
2) Fixed a patch related build system bug.
3) Updated the branding and theme from AdiClock to NetSuite TimeClock.
4) Fixed various bugs and improved the UI and user interaction with the UI.
5) Proposed and provided a proof of concept for an encryption system for SQLite3 file.
`
            }
        },
        "GSoC": {
            logo: "./assets/gsoc.svg",
            items: {
                "Contributor": {
                    "2024": {
                        name: "2024",
                        logo: "./assets/gsoc.svg",
                        contents:
`
# Google Summer of Code (GSoC) Contributor 2024 @ Apache Software Foundation

# Project
Apache NuttX: A Real Time Operating System (RTOS).

# Technologies Involved
C 99, Embedded Boards (STM32, ESP32, etc.), Make, CMake, Git, GitHub.

# Work
- Designed mnemofs, a file system made specifically for NAND flashes.
- Implemented mnemofs.
- Implemented an SPI driver for W25N Winbond NAND flash in NuttX.
- Implemented a NAND flash virtual device in NuttX Simulator.
`
                    },
                    "2023": {
                        name: "2023",
                        logo: "./assets/gsoc.svg",
                        contents:
`
# Google Summer of Code (GSoC) Contributor 2023 @ PostgreSQL Organization

# Project
pgexporter: A Prometheus exporter for PostgreSQL.

# Technologies Involved
C 17, Prometheus, Grafana, CMake, Git, GitHub.

# Work
- Added support for existing and any future versions of PostgreSQL out of the box.
- Support for any future versions will not need any modifications in the codebase.
- Added Grafana usage with pgexporter tutorial.
`
                    } 
                }
            }
        }
    }
};

export default info;