// Opaque stylized cloud. Vertex colour carries the white top, blue underside,
// and the face. No transparency, so the Quest fill rate stays predictable.
Shader "FloppyFlight/Cloud"
{
    Properties
    {
        _Color ("Tint", Color) = (1, 1, 1, 1)
    }
    SubShader
    {
        Tags { "RenderType"="Opaque" "Queue"="Geometry" }
        Pass
        {
            Tags { "LightMode" = "ForwardBase" }
            Cull Back
            ZWrite On
            ZTest LEqual

            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #pragma multi_compile_fog
            #include "UnityCG.cginc"
            #include "Lighting.cginc"

            fixed4 _Color;

            struct appdata
            {
                float4 vertex : POSITION;
                float3 normal : NORMAL;
                float4 color : COLOR;
            };

            struct v2f
            {
                float4 pos : SV_POSITION;
                fixed4 color : COLOR;
                UNITY_FOG_COORDS(1)
            };

            v2f vert(appdata v)
            {
                v2f o;
                o.pos = UnityObjectToClipPos(v.vertex);
                float3 normal = normalize(UnityObjectToWorldNormal(v.normal));
                float3 lightDir = normalize(_WorldSpaceLightPos0.xyz);
                float wrap = saturate(dot(normal, lightDir)) * 0.55 + 0.45;
                float3 ambient = unity_AmbientSky.rgb * 0.55 + unity_AmbientEquator.rgb * 0.28;
                float3 lit = ambient + _LightColor0.rgb * wrap * 0.35;
                o.color = fixed4(saturate(v.color.rgb * _Color.rgb * lit), 1);
                UNITY_TRANSFER_FOG(o, o.pos);
                return o;
            }

            fixed4 frag(v2f i) : SV_Target
            {
                fixed4 col = i.color;
                UNITY_APPLY_FOG(i.fogCoord, col);
                return col;
            }
            ENDCG
        }
    }
    FallBack Off
}
