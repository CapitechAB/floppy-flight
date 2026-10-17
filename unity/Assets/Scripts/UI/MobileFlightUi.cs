using FloppyFlight.Managers;
using UnityEngine;
using UnityEngine.UI;

namespace FloppyFlight.UI
{
    /// <summary>
    /// Portrait start, score, and game-over overlay. Taps are handled by TouchFlapInput,
    /// so these labels do not take the pointer. The panel sits inside the screen safe area.
    /// </summary>
    public class MobileFlightUi : MonoBehaviour
    {
        const float ReferenceWidth = 1080f;
        const float ReferenceHeight = 1920f;

        RectTransform safeRoot;
        Text scoreValue;
        Text bestValue;
        GameObject readyGroup;
        GameObject overGroup;
        Text overScore;
        Text overBest;
        Sprite white;

        void Awake()
        {
            Screen.orientation = ScreenOrientation.Portrait;
            Screen.autorotateToPortrait = false;
            Screen.autorotateToPortraitUpsideDown = false;
            Screen.autorotateToLandscapeLeft = false;
            Screen.autorotateToLandscapeRight = false;
            Build();
        }

        void LateUpdate()
        {
            ApplySafeArea();
            var game = GameManager.Instance;
            if (game == null) return;

            if (scoreValue != null) scoreValue.text = game.Score.ToString();
            if (bestValue != null) bestValue.text = "BEST " + game.Best;

            var ready = game.State == GameState.Ready;
            var over = game.State == GameState.GameOver;
            if (readyGroup != null) readyGroup.SetActive(ready);
            if (overGroup != null) overGroup.SetActive(over);
            if (over)
            {
                if (overScore != null) overScore.text = "SCORE  " + game.Score;
                if (overBest != null) overBest.text = "BEST  " + game.Best;
            }
        }

        void ApplySafeArea()
        {
            if (safeRoot == null) return;
            var safe = Screen.safeArea;
            var width = Mathf.Max(1f, Screen.width);
            var height = Mathf.Max(1f, Screen.height);
            safeRoot.anchorMin = new Vector2(safe.xMin / width, safe.yMin / height);
            safeRoot.anchorMax = new Vector2(safe.xMax / width, safe.yMax / height);
            safeRoot.offsetMin = Vector2.zero;
            safeRoot.offsetMax = Vector2.zero;
        }

        void Build()
        {
            white = WhiteSprite();
            var canvasObject = new GameObject("MobileCanvas");
            var canvas = canvasObject.AddComponent<Canvas>();
            canvas.renderMode = RenderMode.ScreenSpaceOverlay;
            canvas.sortingOrder = 100;
            var scaler = canvasObject.AddComponent<CanvasScaler>();
            scaler.uiScaleMode = CanvasScaler.ScaleMode.ScaleWithScreenSize;
            scaler.referenceResolution = new Vector2(ReferenceWidth, ReferenceHeight);
            scaler.matchWidthOrHeight = 0.5f;
            var safeObject = new GameObject("SafeArea");
            safeObject.transform.SetParent(canvasObject.transform, false);
            safeRoot = safeObject.AddComponent<RectTransform>();
            Stretch(safeRoot);

            var scoreLabel = MakeText(safeRoot, "ScoreLabel", 36, new Color(0.9f, 0.95f, 1f), FontStyle.Bold);
            scoreLabel.rectTransform.anchorMin = new Vector2(0.08f, 0.91f);
            scoreLabel.rectTransform.anchorMax = new Vector2(0.92f, 0.97f);
            scoreLabel.rectTransform.offsetMin = Vector2.zero;
            scoreLabel.rectTransform.offsetMax = Vector2.zero;
            scoreLabel.alignment = TextAnchor.MiddleCenter;
            scoreLabel.text = "SCORE";

            var score = MakeText(safeRoot, "ScoreValue", 120, new Color(1f, 0.86f, 0.2f), FontStyle.Bold);
            score.rectTransform.anchorMin = new Vector2(0.08f, 0.82f);
            score.rectTransform.anchorMax = new Vector2(0.92f, 0.91f);
            score.rectTransform.offsetMin = Vector2.zero;
            score.rectTransform.offsetMax = Vector2.zero;
            score.alignment = TextAnchor.MiddleCenter;
            scoreValue = score;

            var best = MakeText(safeRoot, "BestValue", 32, new Color(1f, 0.95f, 0.85f), FontStyle.Normal);
            best.rectTransform.anchorMin = new Vector2(0.08f, 0.76f);
            best.rectTransform.anchorMax = new Vector2(0.92f, 0.81f);
            best.rectTransform.offsetMin = Vector2.zero;
            best.rectTransform.offsetMax = Vector2.zero;
            best.alignment = TextAnchor.MiddleCenter;
            bestValue = best;

            readyGroup = new GameObject("Ready");
            readyGroup.transform.SetParent(safeRoot, false);
            var readyRect = readyGroup.AddComponent<RectTransform>();
            Stretch(readyRect);
            var title = MakeText(readyRect, "Title", 84, new Color(0f, 0.82f, 0.83f), FontStyle.Bold);
            title.rectTransform.anchorMin = new Vector2(0.06f, 0.48f);
            title.rectTransform.anchorMax = new Vector2(0.94f, 0.62f);
            title.rectTransform.offsetMin = Vector2.zero;
            title.rectTransform.offsetMax = Vector2.zero;
            title.alignment = TextAnchor.MiddleCenter;
            title.text = "Floppy Flight";
            var prompt = MakeText(readyRect, "Prompt", 48, Color.white, FontStyle.Bold);
            prompt.rectTransform.anchorMin = new Vector2(0.08f, 0.38f);
            prompt.rectTransform.anchorMax = new Vector2(0.92f, 0.48f);
            prompt.rectTransform.offsetMin = Vector2.zero;
            prompt.rectTransform.offsetMax = Vector2.zero;
            prompt.alignment = TextAnchor.MiddleCenter;
            prompt.text = "Tap to fly";

            overGroup = new GameObject("GameOver");
            overGroup.transform.SetParent(safeRoot, false);
            var overRect = overGroup.AddComponent<RectTransform>();
            overRect.anchorMin = new Vector2(0.08f, 0.32f);
            overRect.anchorMax = new Vector2(0.92f, 0.68f);
            overRect.offsetMin = Vector2.zero;
            overRect.offsetMax = Vector2.zero;
            var panel = overGroup.AddComponent<Image>();
            panel.sprite = white;
            panel.color = new Color(0.04f, 0.07f, 0.12f, 0.82f);
            panel.raycastTarget = false;

            var crashed = MakeText(overRect, "Crashed", 72, new Color(1f, 0.45f, 0.25f), FontStyle.Bold);
            crashed.rectTransform.anchorMin = new Vector2(0.06f, 0.62f);
            crashed.rectTransform.anchorMax = new Vector2(0.94f, 0.9f);
            crashed.rectTransform.offsetMin = Vector2.zero;
            crashed.rectTransform.offsetMax = Vector2.zero;
            crashed.alignment = TextAnchor.MiddleCenter;
            crashed.text = "Crashed";

            overScore = MakeText(overRect, "OverScore", 48, Color.white, FontStyle.Bold);
            overScore.rectTransform.anchorMin = new Vector2(0.08f, 0.4f);
            overScore.rectTransform.anchorMax = new Vector2(0.92f, 0.58f);
            overScore.rectTransform.offsetMin = Vector2.zero;
            overScore.rectTransform.offsetMax = Vector2.zero;
            overScore.alignment = TextAnchor.MiddleCenter;

            overBest = MakeText(overRect, "OverBest", 36, new Color(1f, 0.9f, 0.6f), FontStyle.Normal);
            overBest.rectTransform.anchorMin = new Vector2(0.08f, 0.26f);
            overBest.rectTransform.anchorMax = new Vector2(0.92f, 0.4f);
            overBest.rectTransform.offsetMin = Vector2.zero;
            overBest.rectTransform.offsetMax = Vector2.zero;
            overBest.alignment = TextAnchor.MiddleCenter;

            var retry = MakeText(overRect, "Retry", 42, new Color(0.55f, 0.95f, 1f), FontStyle.Bold);
            retry.rectTransform.anchorMin = new Vector2(0.08f, 0.06f);
            retry.rectTransform.anchorMax = new Vector2(0.92f, 0.24f);
            retry.rectTransform.offsetMin = Vector2.zero;
            retry.rectTransform.offsetMax = Vector2.zero;
            retry.alignment = TextAnchor.MiddleCenter;
            retry.text = "Tap to retry";
            overGroup.SetActive(false);
        }

        Text MakeText(Transform parent, string name, int size, Color color, FontStyle style)
        {
            var go = new GameObject(name);
            go.transform.SetParent(parent, false);
            var text = go.AddComponent<Text>();
            text.font = Resources.GetBuiltinResource<Font>("LegacyRuntime.ttf");
            text.fontSize = size;
            text.fontStyle = style;
            text.color = color;
            text.alignment = TextAnchor.MiddleCenter;
            text.horizontalOverflow = HorizontalWrapMode.Overflow;
            text.verticalOverflow = VerticalWrapMode.Overflow;
            text.raycastTarget = false;
            return text;
        }

        static void Stretch(RectTransform rect)
        {
            rect.anchorMin = Vector2.zero;
            rect.anchorMax = Vector2.one;
            rect.offsetMin = Vector2.zero;
            rect.offsetMax = Vector2.zero;
        }

        static Sprite WhiteSprite()
        {
            var tex = new Texture2D(1, 1, TextureFormat.RGBA32, false);
            tex.SetPixel(0, 0, Color.white);
            tex.Apply();
            return Sprite.Create(tex, new Rect(0f, 0f, 1f, 1f), new Vector2(0.5f, 0.5f), 1f);
        }
    }
}
