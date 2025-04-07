import pandas as pd

# Load the full email + phone data
all_emails_df = pd.read_csv('formatted_email_phone.csv')  # Ensure columns are 'email', 'phone'

# Load the filter emails
filter_emails_df = pd.read_csv('filter_emails.csv')  # Ensure column is 'email'

# Merge the data based on the 'email' column
merged_df = pd.merge(filter_emails_df, all_emails_df, on='email', how='left')

# Save the filtered output to a new CSV
merged_df.to_csv('filtered_output.csv', index=False)

print("Filtered emails with phone numbers saved to 'filtered_output.csv'")
