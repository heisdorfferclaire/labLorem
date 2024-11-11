
layout(set = 0, binding = 0) buffer InputBuffer {
    float inputData[];
};

layout(set = 0, binding = 1) buffer OutputBuffer {
    float outputData[];
};

void main() {
    uint index = gl_GlobalInvocationID.x;
    outputData[index] = inputData[index] * 2.0;
}
