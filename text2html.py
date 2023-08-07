import markdown

# Read the text from a file
with open('input.md', 'r') as file:
    text = file.read()

# Convert the text to HTML using Markdown
html = markdown.markdown(text)

# Output the HTML code
print(html)
