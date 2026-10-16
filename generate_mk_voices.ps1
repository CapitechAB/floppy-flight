$ffmpeg = "C:\Users\buhre\AppData\Local\Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\ffmpeg-9.0.2-full_build\bin\ffmpeg.exe"

Add-Type -AssemblyName System.Speech
$synth = New-Object System.Speech.Synthesis.SpeechSynthesizer
$synth.SelectVoice('Microsoft David Desktop')
$synth.Rate = -1
$synth.Volume = 100

$voiceData = @{
    "voice_1" = "One!"
    "voice_2" = "Two!"
    "voice_3" = "Three!"
    "voice_4" = "Four!"
    "voice_5" = "Five! Excellent!"
    "voice_6" = "Six!"
    "voice_7" = "Seven!"
    "voice_8" = "Eight!"
    "voice_9" = "Nine!"
    "voice_10" = "Ten! Outstanding!"
    "voice_11" = "Eleven!"
    "voice_12" = "Twelve!"
    "voice_13" = "Thirteen!"
    "voice_14" = "Fourteen!"
    "voice_15" = "Fifteen! Superb!"
    "voice_16" = "Sixteen!"
    "voice_17" = "Seventeen!"
    "voice_18" = "Eighteen!"
    "voice_19" = "Nineteen!"
    "voice_20" = "Twenty! Flawless!"
    "voice_25" = "Twenty Five! Brutal!"
    "voice_30" = "Thirty! Godlike!"
    "voice_combo1" = "Excellent!"
    "voice_combo2" = "Outstanding!"
    "voice_combo3" = "Flawless Victory!"
    "voice_fight" = "Fight!"
    "voice_fatality" = "Fatality!"
}

$tempDir = "src\assets\voice\temp"
if (-not (Test-Path $tempDir)) { New-Item -ItemType Directory -Path $tempDir -Force | Out-Null }
$srcVoiceDir = "src\assets\voice"
$publicVoiceDir = "public\voice"
$unityVoiceDir = "unity\Assets\Audio\Voice"

foreach ($key in $voiceData.Keys) {
    $text = $voiceData[$key]
    $rawWav = "$tempDir\$key.wav"
    $mp3Path = "$srcVoiceDir\$key.mp3"

    # 1. Synthesize Speech
    $synth.SetOutputToWaveFile($rawWav)
    $synth.Speak($text)

    # 2. Apply Mortal Kombat announcer DSP chain in ffmpeg:
    # - Deep pitch drop (pitch=0.72)
    # - Sub-harmonic demonic growl layer (pitch=0.54, lowpass=280Hz)
    # - EQ: Sub bass boost at 110Hz, body punch at 240Hz, presence at 3.4kHz
    # - Netherrealm cavern reverb / slapback echo
    # - Limiter / brickwall loudness
    $filter = "[0:a]asplit=2[main][sub];" +
              "[main]rubberband=pitch=0.72[pitched];" +
              "[sub]rubberband=pitch=0.54,lowpass=f=280,volume=0.55[growl];" +
              "[pitched][growl]amix=inputs=2[combined];" +
              "[combined]equalizer=f=110:width_type=h:width=60:g=8," +
              "equalizer=f=240:width_type=h:width=100:g=5," +
              "equalizer=f=3400:width_type=h:width=800:g=4," +
              "aecho=0.85:0.75:45|90:0.42|0.26," +
              "alimiter=limit=0.96:level=true[out]"

    & $ffmpeg -y -i $rawWav -filter_complex $filter -map "[out]" -codec:a libmp3lame -qscale:a 2 $mp3Path 2>$null

    Copy-Item $mp3Path "$publicVoiceDir\$key.mp3" -Force
    Copy-Item $mp3Path "$unityVoiceDir\$key.mp3" -Force

    Write-Host "Generated Mortal Kombat announcer clip: $key ($text)"
}

$synth.Dispose()
Remove-Item -Path $tempDir -Recurse -Force -ErrorAction SilentlyContinue
Write-Host "All Mortal Kombat announcer clips successfully generated!"
