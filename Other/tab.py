import csv

def convert_tab_to_csv(input_txt_file, output_csv_file):
    with open(input_txt_file, 'r') as infile, open(output_csv_file, 'w', newline='') as outfile:
        reader = (line.strip().split('\t') for line in infile if line.strip())
        writer = csv.writer(outfile)
        writer.writerow(['Email', 'Phone'])  
        writer.writerows(reader)

    print(f"✅ Converted '{input_txt_file}' to '{output_csv_file}'")

# Example usage
convert_tab_to_csv('all_emails.txt', 'formatted_email_phone.csv')
