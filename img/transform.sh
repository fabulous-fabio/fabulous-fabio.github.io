#!/bin/bash

# Abfrage des Zielformats
echo "In welches Format sollen die HEIC-Bilder umgewandelt werden? (jpg/png)"
read target_format

# Sicherstellen, dass die Eingabe kleingeschrieben ist
target_format=$(echo "$target_format" | tr '[:upper:]' '[:lower:]')

if [[ "$target_format" != "jpg" && "$target_format" != "png" ]]; then
    echo "Fehler: Bitte nur 'jpg' oder 'png' eingeben."
    exit 1
fi

# Zähler für die Statistik
count=0

# Schleife durch alle .heic Dateien (Groß-/Kleinschreibung ignoriert)
shopt -s nocaseglob
for file in *.heic; do
    # Prüfen, ob Dateien existieren, um Fehlermeldungen zu vermeiden
    [[ -e "$file" ]] || continue

    # Dateiname ohne Endung extrahieren
    filename="${file%.*}"

    echo "Konvertiere: $file -> $filename.$target_format"
    
    # Der eigentliche Konvertierungsbefehl
    convert "$file" "$filename.$target_format"
    
    ((count++))
done

echo "---------------------------------------"
echo "Fertig! $count Bilder wurden konvertiert."