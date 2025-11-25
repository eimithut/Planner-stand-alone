# workers Konfigurationsdatei
name = "brm5-scenario-planner"
main = "worker.js"
compatibility_date = "2024-11-25" # Verwenden Sie ein aktuelles Datum für moderne Workers-Funktionen
# type = "javascript" # Wird oft weggelassen, da default.

# Das war der Grund für Ihren Fehler: Das Feld [site] wird nur für Pages-Projekte
# mit Assets (statischen Dateien) verwendet. Bei einem reinen Worker wird es weggelassen.
# [site]
# bucket = "./dist" # <--- Dies wird bei reinen Workers NICHT verwendet.
