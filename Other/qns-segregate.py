from collections import Counter
import csv
# Raw multiline string data (paste yours here)
raw_data = """Player's Organisation
Indian Institute of Information Technology (IIIT), Surat
Sharda University (SU), Greater Noida
CMR College of Engineering & Technology (CMRCET)
Indian Institute of Information Technology (IIIT), Surat
Government Engineering College (GEC), Bharuch, Gujarat
Indian Institute of Information Technology (IIIT), Surat
Indian Institute of Information Technology (IIIT), Surat
G.D. Goenka Public School Kashipur
RV University, Bangalore
Dr. Hari Singh Gour University (DHSGU), Sagar
Narsee Monjee Institute of Management Studies (NMIMS), Hyderabad
IIIT Surat
IIIT-Vadodara - International Campus Diu (IIITV-ICD)
Jhulelal institute of technology
Jai hind college
Poornima college of engineering ,jaipur
Indian Institute of Information Technology Surat
Gayatri Vidya Parishad College of Engineering (GVPCE), Visakhapatnam
Indian Institute of Information Technology (IIIT), Surat
Vignan's Institute of Information Technology, Andhra Pradesh
Indian Institute of Information Technology (IIIT), Surat
Indian Institute of Information Technology (IIIT), Surat
UKA TRASADIA university
ST. Joseph's College of Engineering and Technology (SJCET), Palai
Indira Gandhi Delhi Technical University for Women (IGDTUW), Delhi
Banasthali Public School, Vikaspuri G Block Delhi
GLS University (GLSU), Ahmedabad, Gujrat
GLA Uniersity
Indian Institute of Information Technology (IIIT), Surat
Indian Institute of Information Technology (IIIT), Surat
R V University
Indian Institute of Information Technology (IIIT), Surat
Sanskriti University
Vignan's Institute of Information Technology, Andhra Pradesh
Indian Institute of Information Technology (IIIT), Surat
Chhatrapati Shahu Ji Maharaj University (CSJMU), Kanpur
Indian Institute of Information Technology Vadodara - International Campus Diu
Kendriya Vidyalaya, Ballygunge
Indian Institute of Information Technology (IIIT), Surat
Symbiosis Institute of Technology (SIT), Pune
Institute of Technical Education And Research (ITER), Bhubaneswar
National Institute of Engineering
Government Engineering College (GEC), Bharuch, Gujarat
Vignan's institute of information technology
VIGNAN'S INSTUTUTE OF INFORMATION TECHNOLOGY
Indian Institute of Information Technology (IIIT), Surat
Xavier Institute of Social Service (XISS), Ranchi
Vaagdevi Engineering College
Indian Institute of Information Technology (IIIT), Surat
RV University, Bangalore
Indian Institute of Information Technology Surat
RV University, Bangalore
Indian Institute of Information Technology (IIIT), Surat
DELHI PUBLIC SCHOOL
Sarvajanic College of Eng & Tech
Indian Institute of Technology (IIT), Patna
Pravara rural engineering college, loni.
Indian Institute of Information Technology (IIIT), Surat
RVU India
Maharaja Agrasen Institute of technology (MAIT), Delhi
Indian Institute of Information Technology(IIIT), Nagpur
Indian Institute of Information Technology (IIIT), Surat
SRM Insitute of Science and Technology
Indian Institute of Information Technology (IIIT), Surat
Indian Institute of Information Technology, Surat
Great Lakes Institute of Management (GLIM), Gurgaon
SAL Engineering and Technical Institute(SETI) , Ahmedabad,Gujarat
VIGNANS INSTITUTE OF INFORMATION & TECHNOLOGY
Indian Institute of Information Technology Surat (IIIT Surat)
Indian academy degree college
Women Institute of Technology (WIT), Dehradun
Netaji Subhas University, Jamshedpur
METHODIST COLLEGE OF ENGINEERING & TECHNOLOGY.
Indian Institute of Information Technology (IIIT), Surat
Indian Institute of Information Technology Surat
Dr. DY Patil Institute of Technology
Indian Institute of Information Technology Surat (IIIT Surat)
Indian Institute of Information Technology (IIIT), Surat
SRM AP
Motilal Nehru National Institute of Technology
A. D. Patel Institute of Technology (ADIT), New Vallabh Vidhyanagar
Institute of Management Studies (IMS), Ghaziabad
SRM Institute of Science and Technology (SRMIST), Kattankulathur, Chennai
Heritage Institute of Technology, Kolkata
Bharathidasan University
Shri Govindram Seksaria Institute of Technology and Science (SGSITS), Indore
Indian Institute of Information Technology Surat
Indian Institute of Information Technology, Surat
Indian Institute of Information Technology (IIIT), Surat
Government Engineering College Bharuch
Indian Institute of Information Technology (IIIT), Surat
Dumka Engineering College, Dumka
xyz school
Delhi Public School, Chandigarh
Indian Institute of Information Technology Surat (IIIT Surat)
Indian Institute of Information Technology Surat
R.V. College of Engineering (RVCE), Bangalore
SRM University (SRMAP), Andhra Pradesh
Indian Institute of Information Technology Surat
Indian Institute of Information Technology (IIIT), Surat
Shri Ram Murti Smarak College of Engineering and Technology (SRMSCET), Bareilly
Guru Gobind Singh Indraprastha University (GGSIPU), Delhi
SCTR's Pune Institute of Computer Technology, Pune
Birla Institute of Management Technology (BIMTECH), Greater Noida
Sri Sankara Vidyalaya Bhilai
Misrimal Navajee Munoth Jain Engineering College (MNMJEC), Chennai
Chouksey Engineering College (CEC), Chattisgarh
St. Xavier's College (SXC), Ranchi
Indian Institute of Information Technology Surat (IIIT Surat)
Indian Institute of Information Technology (IIIT), Surat
College of Computing Sciences and Information Technology, Moradabad
Vidyalankar Institute of Technology
Indian Institute of Information Technology (IIIT), Surat
Symbiosis Centre for Management and Human Resource Development (SCMHRD)
Indian Institute of Information Technology (IIIT), Surat
Cauvery Group of Institutions
"""

# Step 1: Convert multiline string to list
lines = raw_data.strip().split('\n')

# Step 2: Remove empty and header lines
lines = [line.strip() for line in lines if line.strip() and "Player's Organisation" not in line]

# Step 3: Optional normalization (convert to lowercase or fix minor differences)
normalized_lines = [line.lower().strip() for line in lines]

# Step 4: Count frequencies
counter = Counter(normalized_lines)
# Step 5: Export to CSV
output_filename = "organization_counts.csv"
with open(output_filename, "w", newline='', encoding='utf-8') as csvfile:
    csvwriter = csv.writer(csvfile)
    csvwriter.writerow(["Organization", "Count"])
    
    for org, count in counter.most_common():
        csvwriter.writerow([org.title(), count])
        
# Step 5: Display results
print(f"✅ Total entries: {len(lines)}")
print(f"✅ Unique institutions: {len(counter)}\n")

print("🎓 Unique Institutions and their counts:\n")
for org, count in counter.most_common():
    print(f"{org.title()} → {count}")

# Optional: Export unique list to file
with open("unique_organizations.txt", "w") as f:
    for org in sorted(counter.keys()):
        f.write(f"{org.title()}\n")
