param([string]$Note)

Set-Location $PSScriptRoot

if (-not $Note) {
    $Note = Read-Host "Aaj kya seekha?"
}
if (-not $Note) {
    Write-Host "Note khali hai, kuch commit nahi hua."
    exit 1
}

$date = Get-Date -Format "yyyy-MM-dd"
$file = "journal.md"

if (-not (Test-Path $file)) {
    Set-Content $file "# Learning Journal`n" -Encoding utf8
}

$content = Get-Content $file -Raw
if ($content -notmatch "## $date") {
    Add-Content $file "`n## $date" -Encoding utf8
}
Add-Content $file "- $Note" -Encoding utf8

git add $file
git commit -m "docs: journal entry $date"
git push origin main
